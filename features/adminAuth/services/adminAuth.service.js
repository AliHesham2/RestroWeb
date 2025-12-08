import http from '@/lib/http';

const login = async (email, password) => {
    // Mocking for testing purposes
    // Hardcoded dummy credentials check
    if (email === 'admin@gmail.com' && password === '123456') {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    token: 'mock-token-123456',
                    adminData: {
                        id: 1,
                        name: 'Admin User',
                        email: 'admin@gmail.com'
                    }
                });
            }, 1000); // Simulate network delay
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Invalid credentials (Try: admin@gmail.com / 123456)'));
            }, 1000);
        });
    }

    /* 
    // Real API Call Implementation
    try {
      const response = await http.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.message || 'Login failed');
      }
      throw new Error('Network error or server unavailable');
    } 
    */
};

const adminAuthService = {
    login,
};

export default adminAuthService;
