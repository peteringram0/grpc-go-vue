package main

import (
	"fmt"
	"log"
	"net"

	echo "grpc-go-vue/proto"

	"google.golang.org/grpc"
)

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 14586))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := &echo.Server{}

	grpcServer := grpc.NewServer()
	// attach the todo service to the server
	echo.RegisterEchoServiceServer(grpcServer, s)

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	} else {
		log.Printf("Server started successfully")
	}

}
