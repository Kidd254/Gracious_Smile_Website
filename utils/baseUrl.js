const baseUrl = process.env.NODE_ENV === "production" 
? 'https://guramayledigitalsolution.netlify.app' 
: 'http://localhost:3000';

export default baseUrl;