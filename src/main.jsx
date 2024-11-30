import React, { useState } from 'react';
import './style.css';

const WordList = () => {
    const [words, setWords] = useState([]);
    const [newWord, setNewWord] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingWord, setEditingWord] = useState('');

    const handleAddWord = () => {
        if (!newWord) return;
        setWords([...words, newWord]);
        setNewWord('');
    };

    const handleEditWord = (index) => {
        setEditingIndex(index);
        setEditingWord(words[index]);
    };

    const handleSaveEdit = (index) => {
        const updatedWords = [...words];
        updatedWords[index] = editingWord;
        setWords(updatedWords);
        setEditingIndex(null);
        setEditingWord('');
    };

    const handleDeleteWord = (index) => {
        setWords(words.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>Словарное приложение</h1>
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, index) => (
                        <tr key={index}>
                            <td>
                                {editingIndex === index ? (
                                    <input
                                        value={editingWord}
                                        onChange={e => setEditingWord(e.target.value)}
                                        placeholder="Введите слово"
                                    />
                                ) : (
                                    word
                                )}
                            </td>
                            <td>
                                {editingIndex === index ? (
                                    <>
                                        <button onClick={() => handleSaveEdit(index)}>Сохранить</button>
                                        <button onClick={() => setEditingIndex(null)}>Отмена</button>
                                    </>
                                ) : (
                                    <>

<button onClick={() => handleEditWord(index)}>Редактировать</button>
                                        <button onClick={() => handleDeleteWord(index)}>Удалить</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <input
                    value={newWord}
                    onChange={(e) => setNewWord(e.target.value)}
                    placeholder="Введите новое слово"
                />
                <button onClick={handleAddWord}>Добавить слово</button>
            </div>
        </div>
    );
};

export default WordList;
