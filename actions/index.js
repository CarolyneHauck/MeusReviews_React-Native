import firebase from '../firebase'

export function getBlogs() {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        if (user) {
            firebase.database().ref('/blogs').on('value', snapshot => {
                const blogs = snapshot.val();
                const result = Object.keys(blogs)
                    .map((key) => {
                        return { id: key, key: key, ...blogs[key] };
                    });
                const myBlogs = result.filter((e) => e.userId === user.uid);

                const myBlogsAllowed = result.filter(e => e.usersAllowed && e.usersAllowed.length > 0 ? e.usersAllowed.includes(user.uid) : false);

                dispatch({
                    type: "BLOGS_FETCH",
                    payload: myBlogs.concat(myBlogsAllowed)
                })
            })
        }

    }
}



export function postBlogs(title, content) {
    return (dispatch) => {
        const user = firebase.auth().currentUser;
        if (user) {
            const post = { title, content, userId: user.uid, usersAllowed: [] };
            firebase.database().ref('/blogs').push(post)
        }

    }
}


export function deleteBlog(key) {
    return (dispatch) => {
        firebase.database().ref(`/blogs/${key}`).remove()
    }
}

export function editBlog(title, content, key) {
    return (dispatch) => {
        firebase.database().ref(`/blogs`).child(key).update({ title, content })
    }
}