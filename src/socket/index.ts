import io from 'socket.io-client';

// Initialize the socket.io client
export const socketIo = io(process.env.REACT_APP_BASE_SOCKET as string, {
  transports: ['websocket', 'polling'],
});

// Function to handle connection event
function handleConnect() {
  console.log('Connected to the server');
  // Add your custom logic for handling connection here
}

// Function to handle disconnection event
function handleDisconnect() {
  console.log('Disconnected from the server');
  // Add your custom logic for handling disconnection here
}

// Function to handle reconnection event
export function handleReconnect(attempt?: number) {
  console.log(`Reconnected to the server (attempt ${attempt})`);
  // Add your custom logic for handling reconnection here
  if (socketIo) {
    socketIo.disconnect();
  }
  socketIo.connect();
}

// Attach event listeners to the socket
socketIo.on('connect', handleConnect);
socketIo.on('disconnect', handleDisconnect);
socketIo.on('reconnect', (attempt: number) => handleReconnect(attempt));
