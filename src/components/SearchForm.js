import { useForm } from 'react-hook-form';
import { useState } from 'react';
import searchPage from './searchPage.module.css';

export default function SearchForm(props) {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');

  const handleCategory = (e) => {
    const value = e.target.value;
    setCategory(value);
    setType('');
  };
  const handleType = (e) => {
    const value = e.target.value;
    setType(value);
  };

  const onSubmit = (data) => {
    props.search(data);
  };

  return (
    <>
      <div>
        <form
          className={searchPage.formWrapper}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="category">Please select a category:</label>
          <select
            name="category"
            ref={register}
            onChange={(e) => handleCategory(e)}
          >
            <option value="">select one</option>
            <option value="beauty">Beauty</option>
            <option value="health">Health and Wellness</option>
          </select>
          {category === 'beauty' && (
            <>
              <span>
                <label htmlFor="type">What are you looking for?</label>
                <select
                  name="type"
                  onChange={(e) => handleType(e)}
                  ref={register}
                >
                  <option value="">select one</option>
                  <option value="salon">Salon</option>
                  <option value="barber">Barber Shop</option>
                  <option value="nail salon">Nail Salon</option>
                  <option value="massage">Massage</option>
                  <option value="other">Other</option>
                </select>
              </span>
              {type !== '' && (
                <p>
                  <label htmlFor="companyName">
                    Do you know who you're looking for?
                  </label>
                  <input
                    ref={register}
                    type="text"
                    name="companyName"
                    placeholder="find by name"
                  />
                  <span>
                    <button variant="success" type="submit">
                      {type !== 'other' ? `Find me a ${type}` : 'Search'}
                    </button>
                  </span>
                </p>
              )}
            </>
          )}

          {category === 'health' && (
            <>
              <span>
                <label htmlFor="type">What are you looking for?</label>
                <select
                  name="type"
                  ref={register}
                  onChange={(e) => handleType(e)}
                >
                  <option value="">select one</option>
                  <option value="chiropractor">Chiropractor</option>
                  <option value="dentist">Dentist </option>
                  <option value="other">Other</option>
                </select>
              </span>
              {type !== '' && (
                <p>
                  <label htmlFor="companyName">
                    Do you knnow who you're looking for?
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="find by name"
                  />
                  <span>
                    <button variant="success" type="submit">
                      {type !== 'other' ? `Find me a ${type}` : 'Search'}
                    </button>
                  </span>
                </p>
              )}
            </>
          )}
        </form>
      </div>
    </>
  );
}
