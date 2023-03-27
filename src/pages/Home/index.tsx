import { useEffect, useState } from "react";
import { Card, Loader } from "../../components";

import api from "../../service/api";
import { Container } from "./styles";

enum Status {
    LOADING = 'loading',
    DONE = 'done',
    ERROR = 'error'
}

interface IMovie {
    id: number,
    title: string,
    price: number,
    image: string,
};

const Home = () => {
    const [status, setStatus] = useState<Status>(Status.LOADING);
    const [movies, setMovies] = useState<IMovie[]>([]);

    const fetchMovies = async () => {
        try {
            const { data } = await api.get('/products');

            setStatus(Status.DONE);
            setMovies(data);
        } catch (err) {
            setStatus(Status.ERROR)
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    if(status === Status.LOADING) return <Loader />
    return (
        <Container>
            {movies.map((movie: IMovie) => <Card key={movie.id} {...movie} />)}
        </Container>
    );
};

export default Home;