/*

COMMUNICATION PROTOCOLS


HTTP ==> TCP Connection (Transmission Control Protocol)

TCP connection ==>(reliable connection) Its a three way handshake.

TCP gurantees that any of the packet is not going to lost time of transfering data one server to another server.

"TCP uses a three-way handshake to establish a reliable connection between a client and server before data transmission. First, the client sends a SYN packet to request a connection. The server responds with SYN-ACK, confirming the request and sending its own sequence number. Finally, the client sends an ACK to confirm the server's response. After these three steps, the TCP connection is established and data transmission can begin."


UDP==>(User Datagram Protocol)

"UDP is a fast connectionLess network protocol used to send data packets quickly without eastablishing a prior connection ,guaranteeing delivery or checking packet order."

How UDP Works==>
    1=> No Handshake
    2=> Lightweight header
    3=> No error Recovery

Common use=>
     Voice call and video conferencing
     Live video and audio
     Online Gaming
     DNS lookups


HTTP/3 (Quic)
  =>Header Compression
  =>Faster
  =>Improved performance
  =>Better Network congestion
  

*/ 