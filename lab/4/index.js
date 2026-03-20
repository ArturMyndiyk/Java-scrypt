function query(collection) {
    let result = [...collection];
    const operations = Array.from(arguments).slice(1);
    operations.sort((a, b) => {
        if (a.name === 'filterIn' && b.name === 'select') return -1;
        if (a.name === 'select' && b.name === 'filterIn') return 1;
        return 0;
    });

    const selects = operations.filter(op => op.name === 'select');
    
    operations.filter(op => op.name === 'filterIn').forEach(op => {
        result = op(result);
    });

    if (selects.length > 0) {
        result = selects[0](result);
        for (let i = 1; i < selects.length; i++) {
            result = selects[i](result);
        }
    }

    return result;
}

function select() {
    const fields = Array.from(arguments);
    return function select(collection) {
        return collection.map(item => {
            let newItem = {};
            fields.forEach(field => {
                if (item.hasOwnProperty(field)) {
                    newItem[field] = item[field];
                }
            });
            return newItem;
        });
    };
}

function filterIn(fieldName, values) {
    return function filterIn(collection) {
        return collection.filter(item => {
            return values.includes(item[fieldName]);
        });
    };
}