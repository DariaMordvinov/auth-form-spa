export const handleSignIn = (data, setIsLoading, finishLoad) => {
    setIsLoading(true)

    fetch('/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            finishLoad(data.logged, "Invalid email or password");
        })
        .catch(error => {
            finishLoad(false, "Something went wrong. Please try again later");
        });
}

export const handleSignUp = (data, setIsLoading, finishLoad) => {
    setIsLoading(true)

    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            finishLoad(data.logged, "Couldn't register user");
        })
        .catch(error => {
            finishLoad(false, "Something went wrong. Please try again later");
        });
}

export const handleReset = (data, setIsLoading, finishLoad) => {
    setIsLoading(true)
    fetch('/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            finishLoad(data.reset);
        })
        .catch(error => {
            finishLoad(false);
        });
}