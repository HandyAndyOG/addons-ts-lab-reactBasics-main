export interface Data {
    name: {
        title: string;
        first: string;
        last: string;
    }
    location: {
        street: {
            number: number;
            name: string;
        }
        city: string;
        state: string;
        country: string;
        postcode: number;
        coordinates: {
            latitude: string;
            longitude: string;
        }
        timezone: {
            offset: string;
            description: string;
        }
    }
    email: string;
    picture: {
        large: string
    }
    dob: {
        date: string;
        age: number;
    }
}

export interface Props {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export interface States {
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    first: string;
    setFirst: React.Dispatch<React.SetStateAction<string>>;
    last: string;
    setLast: React.Dispatch<React.SetStateAction<string>>;
}