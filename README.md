--home useEffect(() => {
async function getPosts() {
const postref = collection(db, "posts");
await getDocs(postref).then((snapshot) => {
let list = [];
snapshot.forEach((doc) => {
list.push({
id: doc.id,
title: doc.data().title,
linkImg: doc.data().linkImg,
description: doc.data().description,
autor: doc.data().autor,
});
setPost(list);
console.log(list);
});
});
}
getPosts();
}, []);
