const showUsers = (owner, ...others) => {
    console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`);
};

showUsers("Adrian");
showUsers("Adrian", "Jadzia", "Staszek", "Henio");