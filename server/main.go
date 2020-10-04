package main

import (
	"net/http"
	"github.com/rs/cors"
	"encoding/json"
)

type User struct {
	Name string `json: "name"`
	Points int `json: "points"`
}

func main() {
	mux := http.NewServeMux()

	var Users []User = []User {
		User{Name: "Luis Arce", Points: 3000},
		User{Name: "Daniela", Points: 2500},
	}

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(Users)
	})

	handler := cors.Default().Handler(mux)
	http.ListenAndServe(":8080", handler)
}