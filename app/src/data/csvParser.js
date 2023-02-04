fetch("path/to/file.csv")
    .then((response) => response.text())
    .then((csvData) => {
        const csvRows = csvData.split("\n");
        const csvArray = [];

        for (const row of csvRows) {
            const columns = row.split(",");
            csvArray.push({
                name: columns[0],
                address: columns[1],
            });
        }
    });

export { csvArray };
