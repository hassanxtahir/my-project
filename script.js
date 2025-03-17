document.addEventListener('DOMContentLoaded', () => {
    const chatHistory = document.getElementById('chatHistory');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    // Function to add a message to the chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.textContent = message;
        
        messageDiv.appendChild(messageContent);
        chatHistory.appendChild(messageDiv);
        
        // Scroll to the bottom of chat history
        chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    // Function to handle sending messages
    async function handleSend() {
        const message = messageInput.value.trim();
        if (!message) return;

        // Disable input and button while processing
        messageInput.disabled = true;
        sendButton.disabled = true;

        // Add user message to chat
        addMessage(message, true);
        messageInput.value = '';

        try {
            // This is where you'll integrate your custom AI model
            // For now, we'll just echo back a placeholder response
            // Replace this with your actual AI model integration
            
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Add bot response
            addMessage("I received your message: " + message + "\n(Replace this with your AI model's response)");
        } catch (error) {
            addMessage("Sorry, I encountered an error processing your message.", false);
            console.error('Error:', error);
        }

        // Re-enable input and button
        messageInput.disabled = false;
        sendButton.disabled = false;
        messageInput.focus();
    }

    // Event listeners
    sendButton.addEventListener('click', handleSend);
    
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    });

    // Focus input on page load
    messageInput.focus();
});
