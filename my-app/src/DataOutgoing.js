

function SendData(testData) {
    fetch('https://localhost:44368/api/values', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
    })
}


export default SendData;