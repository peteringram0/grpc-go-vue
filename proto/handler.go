package echo

import (
	"golang.org/x/net/context"
)

// GRPC server
type Server struct {
	Message *StringMessage
}

//
func (s *Server) Echo(ctx context.Context, e *Empty) (*StringMessage, error) {
	return &StringMessage{
		Value: "pong",
	}, nil
}
