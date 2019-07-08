package main

import (
	"fmt"
	echo "grpc-go-vue/server/proto"
	"log"
	"net"

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
