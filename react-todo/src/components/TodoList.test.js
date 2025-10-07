import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  // Test 1: Initial Render Test
  test("renders TodoList component with initial demo todos", () => {
    render(<TodoList />);

    // Check if the main heading is rendered
    expect(screen.getByText("Todo List")).toBeInTheDocument();

    // Check if initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Practice JavaScript")).toBeInTheDocument();
    expect(screen.getByText("Study Tailwind CSS")).toBeInTheDocument();

    // Check if the task counter is displayed correctly
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();

    // Check if the input field is present
    expect(
      screen.getByPlaceholderText("Add a new todo...")
    ).toBeInTheDocument();

    // Check if the Add button is present
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  // Test 2: Adding Todos Test
  test("adds a new todo when form is submitted", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    // Type a new todo
    fireEvent.change(input, { target: { value: "New Test Todo" } });

    // Submit the form
    fireEvent.click(addButton);

    // Check if the new todo appears in the list
    expect(screen.getByText("New Test Todo")).toBeInTheDocument();

    // Check if the input is cleared after submission
    expect(input.value).toBe("");

    // Check if task counter is updated (4 of 5 tasks remaining)
    expect(screen.getByText("4 of 5 tasks remaining")).toBeInTheDocument();
  });

  test("adds a new todo when form is submitted via Enter key", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");

    // Type a new todo
    fireEvent.change(input, { target: { value: "Enter Key Todo" } });

    // Submit the form using Enter key (simulating form submission)
    fireEvent.submit(input.closest("form"));

    // Check if the new todo appears in the list
    expect(screen.getByText("Enter Key Todo")).toBeInTheDocument();

    // Check if the input is cleared after submission
    expect(input.value).toBe("");
  });

  test("does not add empty or whitespace-only todos", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add");

    // Try to submit empty todo
    fireEvent.click(addButton);

    // Check that task count remains the same
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();

    // Try to submit whitespace-only todo
    fireEvent.change(input, { target: { value: "   " } });
    fireEvent.click(addButton);

    // Check that task count still remains the same
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();
  });

  // Test 3: Toggling Todos Test
  test("toggles todo completion status when clicked", () => {
    render(<TodoList />);

    // Find the "Learn React" todo (initially not completed)
    const learnReactTodo = screen.getByText("Learn React");

    // Initially, "Learn React" should not be completed (3 of 4 remaining)
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();

    // Click on the todo to toggle it
    fireEvent.click(learnReactTodo);

    // After toggling, should show 2 of 4 tasks remaining
    expect(screen.getByText("2 of 4 tasks remaining")).toBeInTheDocument();

    // Click again to toggle back
    fireEvent.click(learnReactTodo);

    // Should be back to 3 of 4 tasks remaining
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();
  });

  test("toggles todo completion status when checkbox is clicked", () => {
    render(<TodoList />);

    // Find all checkboxes (circle buttons)
    const checkboxes = screen.getAllByRole("button");
    // Filter to get only toggle buttons (not delete buttons)
    const toggleButtons = checkboxes.filter((button) =>
      button.className.includes("rounded-full")
    );

    // Click the first toggle button (Learn React)
    fireEvent.click(toggleButtons[0]);

    // Check if task counter updated
    expect(screen.getByText("2 of 4 tasks remaining")).toBeInTheDocument();
  });

  // Test 4: Deleting Todos Test
  test("deletes a todo when delete button is clicked", () => {
    render(<TodoList />);

    // Initially should have "Learn React" todo
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();

    // Find all buttons and identify delete buttons by their title attribute
    const allButtons = screen.getAllByRole("button");
    const deleteButtons = allButtons.filter(
      (button) => button.getAttribute("title") === "Delete todo"
    );

    // Click the first delete button (should delete "Learn React")
    fireEvent.click(deleteButtons[0]);

    // Check if "Learn React" is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();

    // Check if task counter updated (should be 2 of 3 tasks remaining since we deleted one incomplete task)
    expect(screen.getByText("2 of 3 tasks remaining")).toBeInTheDocument();
  });

  test("shows empty state when all todos are deleted", () => {
    render(<TodoList />);

    // Delete all todos
    const deleteButtons = screen
      .getAllByRole("button")
      .filter((button) => button.getAttribute("title") === "Delete todo");

    deleteButtons.forEach((button) => {
      fireEvent.click(button);
    });

    // Check if empty state message is shown
    expect(
      screen.getByText("No todos yet. Add one above!")
    ).toBeInTheDocument();

    // Check if task counter shows 0 of 0
    expect(screen.getByText("0 of 0 tasks remaining")).toBeInTheDocument();
  });

  // Test 5: Additional Edge Cases
  test("handles multiple operations correctly", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");

    // Add a new todo
    fireEvent.change(input, { target: { value: "Multi-operation Todo" } });
    fireEvent.submit(input.closest("form"));

    // Toggle the new todo
    const newTodo = screen.getByText("Multi-operation Todo");
    fireEvent.click(newTodo);

    // Check counter (should be 3 of 5 since we added one and completed it)
    expect(screen.getByText("3 of 5 tasks remaining")).toBeInTheDocument();

    // Delete the completed "Practice JavaScript" todo
    const allButtons = screen.getAllByRole("button");
    const deleteButtons = allButtons.filter(
      (button) => button.getAttribute("title") === "Delete todo"
    );

    // Find and click delete button for "Practice JavaScript" (3rd todo, index 2)
    fireEvent.click(deleteButtons[2]);

    // Should now be 3 of 4 tasks remaining
    expect(screen.getByText("3 of 4 tasks remaining")).toBeInTheDocument();

    // Verify "Practice JavaScript" is deleted
    expect(screen.queryByText("Practice JavaScript")).not.toBeInTheDocument();
  });

  test("preserves todo order when adding and deleting", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");

    // Add a todo at the end
    fireEvent.change(input, { target: { value: "Last Todo" } });
    fireEvent.submit(input.closest("form"));

    // Get all todo texts in order
    const todoTexts = [
      "Learn React",
      "Build a Todo App",
      "Practice JavaScript",
      "Study Tailwind CSS",
      "Last Todo",
    ];

    todoTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
