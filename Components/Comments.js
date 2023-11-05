import React, { useState, useEffect, useRef } from 'react';

function Comments() {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const commentInputRef = useRef(null);

    useEffect(() => {
        fetch('https://mulakat.azurewebsites.net/Post', {
            method: 'GET',
            headers: {
                'accept': '*/*',
            },
        })
            .then(response => response.json())
            .then(data => {
                setComments(data.commentInformation.comments);
            })
            .catch(err => console.log(err));
    }, []);

    const handleCommentSubmit = () => {
        // Yorum verilerini hazırlama
        const newCommentData = {
            content: newComment,
            user: {
                id: 1,
                username: 'YourUsername',
                profilePictureLink: 'YourProfilePictureLink', // Profil resmi bağlantısı
            },
        };

        // Yorumu sunucuya gönder
        fetch('https://mulakat.azurewebsites.net/Comment', {
            method: 'POST',
            headers: {
                'accept': '*/*',
            },
            body: JSON.stringify(newCommentData),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setComments(prevComments => [...prevComments, data.comment]);
                    setNewComment('');
                    commentInputRef.current.value = '';
                } else {
                    alert('Yorum eklenirken bir hata oluştu.');
                }
            })
            .catch(err => console.log(err));
    };

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
            <div>
                <input
                    type="text"
                    ref={commentInputRef}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Yorum ekleyin"
                />
                <button onClick={handleCommentSubmit}>Yorum Ekle</button>
            </div>
        </div>
    );
}

export default Comments;
