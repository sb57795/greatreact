import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Обновите состояние, чтобы следующий рендер показал запасной UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Вы можете также сохранить ошибку в журнале ошибок
        console.error("Ошибка:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Можно отобразить запасной UI
            return <h1>Что-то пошло не так.</h1>;
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;

