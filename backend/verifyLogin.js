import fetch from 'node-fetch';

const credentials = {
    email: "admin@example.com",
    password: "Admin123!"
};

const testLogin = async (url, name) => {
    try {
        console.log(`Testing ${name} (${url})...`);
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(credentials)
        });

        if (response.ok) {
            console.log(`✅ ${name}: Success!`);
            const data = await response.json();
            // console.log(data);
        } else {
            console.log(`❌ ${name}: Failed with status ${response.status} (${response.statusText})`);
            // const text = await response.text();
            // console.log("Response:", text);
        }
    } catch (error) {
        console.log(`❌ ${name}: Error - ${error.message}`);
    }
};

const run = async () => {
    await testLogin('http://localhost:8000/api/v1/auth/login', 'Local Backend');
    await testLogin('https://my-portfolio-wz6v.onrender.com/api/v1/auth/login', 'Remote Backend (Render)');
};

run();
