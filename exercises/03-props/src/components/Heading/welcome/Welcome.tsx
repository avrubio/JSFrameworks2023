interface WelcomeProps {
  name?: string;
}

export function Welcome({ name = "user" }: WelcomeProps) {
  return <p>Hello {name} </p>;
}
