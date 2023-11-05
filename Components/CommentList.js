import React, { useState, useEffect } from 'react';

function CommentList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // API'den verileri almak için
        fetch('https://mulakat.azurewebsites.net/Post', {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        })
            .then(response => response.json())
            .then(data => {
                // API'den alınan verileri state de kaydetmek için
                setComments(data.commentInformation.comments);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <div>
                            <img src={comment.user.profilePictureLink} alt={comment.user.username} />
                            <span className="text-gray-100">{comment.user.username}:</span>
                        </div>
                        <p className="text-gray-100">{comment.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CommentList;
