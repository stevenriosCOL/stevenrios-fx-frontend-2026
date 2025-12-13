// lib/auth.ts
export interface LoginData {
  usuario_id: string;
  password: string;
  user_type: 'student' | 'advisor' | 'admin';
}

export interface LoginResponse {
  success: boolean;
  user?: {
    id: number;
    name: string;
    usuario_id: string;
    tipo: string;
  };
  redirect?: string;
  message?: string;
}

export const authService = {
  async login(data: LoginData): Promise<LoginResponse> {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Error al iniciar sesión');
      }
      
      return result;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`, {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout error:', error);
    }
  }
};