import { useForm } from 'react-hook-form';
import { useState } from 'react';
import searchPage from './searchPage.module.css';

export default function SearchForm(props) {
  const { register, handleSubmit } = useForm();
  const [category, setCategory] = useState('');
  const [type, setType] = useState('');
  const [compress, setCompress] = useState(false)

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
    setCompress(true)
    props.search(data);
  };

  return (
    <>
      <div>
        <form
          className={searchPage.formWrapper}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="category">Please select a category:*</label>
          <select
            name="category"
            ref={register}
            onChange={(e) => handleCategory(e)}
          >
            <option disabled selected value="">
              select one
            </option>
            <option value="BEAUTY">Beauty</option>
            <option value="HEALTH">Health and Wellness</option>
          </select>
          {!compress && <br />}
          {category === 'BEAUTY' && (
            <>
              <span>
                <label htmlFor="type">What are you looking for?*</label>
                <select
                  name="type"
                  onChange={(e) => handleType(e)}
                  ref={register}
                >
                  <option disabled selected value="">
                    select one
                  </option>
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
                    placeholder="Tell us what to look for"
                  />
                  <span>
                    {!compress && <br />}
                    <button variant="success" type="submit">
                      {type !== 'other' ? `Find me a ${type}` : 'Search'}
                    </button>
                  </span>
                </p>
              )}
            </>
          )}

          {category === 'HEALTH' && (
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
                    Do you know who you're looking for?
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="find by name"
                  />
                  <span>
                    {!compress && <br />}
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
