import { postsTable, usersTable } from "./schema";
import drizzleConnector from ".";

const seed = async () => {
  console.log("Starting seeding the database.");

  const db = drizzleConnector.database;
  
  try {
    // Clear the tables.
    await db.delete(usersTable);
    await db.delete(postsTable);

    await db.insert(usersTable).values([
      {
        id: 1,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson43@example.com",
      },
      {
        id: 2,
        firstName: "Robert",
        lastName: "Williams",
        email: "robert.williams87@example.net",
      },
      {
        id: 3,
        firstName: "Emily",
        lastName: "Brown",
        email: "emily.brown12@example.org",
      },
    ]);

    await db.insert(postsTable).values([
      {
        title: "Getting Started with TypeScript",
        content:
          "TypeScript is a powerful superset of JavaScript that adds static typing to the language. In this post, we'll explore the basics of TypeScript and how it can improve your development workflow.",
        userId: 1,
        createdAt: new Date("2024-01-15T10:00:00Z"),
        updatedAt: new Date("2024-01-15T10:00:00Z"),
      },
      {
        title: "Understanding PostgreSQL Fundamentals",
        content:
          "PostgreSQL is an advanced open-source relational database. This post covers the essential concepts you need to know, including tables, relationships, and basic query operations.",
        userId: 2,
        createdAt: new Date("2024-01-16T14:30:00Z"),
        updatedAt: new Date("2024-01-16T14:30:00Z"),
      },
      {
        title: "Web Development Best Practices",
        content:
          "Learn about crucial web development practices including code organization, performance optimization, and security considerations that every developer should know.",
        userId: 1,
        createdAt: new Date("2024-01-17T09:15:00Z"),
        updatedAt: new Date("2024-01-17T09:15:00Z"),
      },
      {
        title: "Modern JavaScript Features",
        content:
          "Explore the latest features in JavaScript including async/await, destructuring, and modules. See how these features can make your code more efficient and readable.",
        userId: 3,
        createdAt: new Date("2024-01-18T11:45:00Z"),
        updatedAt: new Date("2024-01-18T11:45:00Z"),
      },
      {
        title: "API Design Principles",
        content:
          "Good API design is crucial for building scalable applications. This post discusses RESTful principles, endpoint naming conventions, and best practices for API development.",
        userId: 2,
        createdAt: new Date("2024-01-19T16:20:00Z"),
        updatedAt: new Date("2024-01-19T16:20:00Z"),
      },
      {
        title: "Database Optimization Techniques",
        content:
          "Learn how to optimize your database queries and structure for better performance. Topics include indexing, query optimization, and database normalization.",
        userId: 1,
        createdAt: new Date("2024-01-20T13:10:00Z"),
        updatedAt: new Date("2024-01-20T13:10:00Z"),
      },
      {
        title: "Frontend Development Trends 2024",
        content:
          "Stay up-to-date with the latest frontend development trends including new frameworks, tools, and methodologies shaping the web development landscape.",
        userId: 3,
        createdAt: new Date("2024-01-21T15:40:00Z"),
        updatedAt: new Date("2024-01-21T15:40:00Z"),
      },
      {
        title: "Security Best Practices in Web Development",
        content:
          "Security is crucial in modern web applications. Learn about common vulnerabilities and how to protect your applications from various types of attacks.",
        userId: 2,
        createdAt: new Date("2024-01-22T12:25:00Z"),
        updatedAt: new Date("2024-01-22T12:25:00Z"),
      },
      {
        title: "Building Scalable Applications",
        content:
          "Discover the principles and practices behind building applications that can scale effectively. Topics include architecture patterns, caching strategies, and load balancing.",
        userId: 1,
        createdAt: new Date("2024-01-23T10:55:00Z"),
        updatedAt: new Date("2024-01-23T10:55:00Z"),
      },
      {
        title: "Testing Strategies for Modern Applications",
        content:
          "Effective testing is key to maintaining reliable applications. This post covers different testing approaches including unit testing, integration testing, and end-to-end testing.",
        userId: 3,
        createdAt: new Date("2024-01-24T14:15:00Z"),
        updatedAt: new Date("2024-01-24T14:15:00Z"),
      },
    ]);
    
    console.log("Database Successfully Seeded!");
  } catch (err) {
    console.log("Error encountered while seeding the database.");
    console.error(err);
  }
};

seed().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
})