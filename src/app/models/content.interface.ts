export interface Content {
  id: string;
  title: string;
  description: string;
  logoUrl: string;
  multimedia: string[];
  template?: string;
  networks?: Record<string, string>;
}
export interface Network {
  name: string;
  link: string;
}
