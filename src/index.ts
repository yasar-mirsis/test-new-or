import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = process.env.PORT || '3000';
const HOST = process.env.HOST || 'localhost';

// Middleware
app.use(express.json());

// Hello endpoint
app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello, World!' });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});

export default app;
