
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

function generatetodos() {
  const number = Math.floor(Math.random() * 5) + 1;
  const todos = [];

  for (let i = 1; i <= number; i++) {
    const todo = {
      id: i,
      title: `Todo ${Math.floor(Math.random() * 100)}`,
      description: `This is a randomly generated todo ${i}`,
      completed: Math.random() < 0.5,
    };

    todos.push(todo);
  }

  return todos;
}

app.get("/todo", (req, res) => {
  const todos = generatetodos();

  res.json({
    todos: todos,
  });
});

// Start a local server when running directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the Express app for Vercel
module.exports = app;
