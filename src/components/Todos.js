const TodoItem = ({todo, onToggle, omRemove}) => {
    return (
        <div>
            <input type='checkbox' />
            <span>예제 테스트</span>
            <button>삭제</button>
        </div>
    );
};

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form>
                <input />
                <button type='submit'>등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
};

export default Todos;