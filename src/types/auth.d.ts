export interface AuthContextType {
  email: string | null;
  token: string | null;
  login: (email: string, token: string) => void;
  logout: () => void;
}
