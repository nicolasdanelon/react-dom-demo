import useLocalStorage from '../useLocalStorage';

const Test = () => {
  const [name, setName] = useLocalStorage('name', '');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Hello, {name}!</p>
    </div>
  );
};

export default Test;
