
const GEMINI_API_KEY = 'AIzaSyAPwwRmlsie92uZZHvZAJhcHHUw8dHGLuc'; 



// Send request to your backend (replace with your actual backend URL)
axios.post('/api/gemini', { 
    question: userQuestion,
    pdfText: extractedPDFText  // Include PDF text if available
}, {
    headers: {
        'Authorization': `Bearer ${GEMINI_API_KEY}` 
    }
})
// ...
