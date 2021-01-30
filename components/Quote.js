import { useCallback, useState } from 'react';
import Sprinkler from '@/components/svg/sprinkler.svg';
import LawnMower from '@/components/svg/lawn-mower.svg';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import { request, gql } from 'graphql-request';
import Gardening from '@/components/svg/undraw_Gardening_eaf3.svg';
import CompanyPic from '@/components/svg/undraw_Building_re_xfcm.svg';
import PersonPic from '@/components/svg/undraw_male_avatar_323b.svg';
import { StyledQuote } from './StyledQuote';
import { TypeBtn } from './TypeBtn';
import ReactLoading from 'react-loading';
import { Input } from './QuoteModal';
import tw from 'twin.macro';
import { ParallaxBanner } from 'react-scroll-parallax';

const ExampleLoader = ({ type, color }) => (
  <ReactLoading type={'spin'} color={'#000'} />
);

export const Quote = ({ slim = false, children }) => {
  const [type, setType] = useState('persoana');
  const { register, handleSubmit, watch, errors } = useForm();
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState(false);
  const onSubmit = useCallback(
    async (data) => {
      setErr(false);
      setSending(true);
      const { nume, prenume, telefon, email } = data;
      const vars = { nume, prenume, telefon, email, tip: type };
      const mutation = gql`
        mutation sendContactEmail(
          $nume: String!
          $prenume: String!
          $telefon: String!
          $tip: String!
          $email: String
        ) {
          sendContactEmail(
            nume: $nume
            prenume: $prenume
            telefon: $telefon
            email: $email
            tip: $tip
          )
        }
      `;
      try {
        let resp = await request('/api/graphql', mutation, vars);
        if (resp.sendContactEmail) {
          setSent(true);
        } else {
          setErr(true);
        }
      } catch (e) {
        setErr(true);
      }
      setSending(false);
    },
    [type]
  );
  const [data, setData] = useState({
    nume: '',
    prenume: '',
    telefon: '',
    email: '',
  });
  const [sending, setSending] = useState(false);
  return (
    // <StyledQuote
    //   tw="relative"
    //   className={classNames({
    //     'mt-12 pt-6 pb-6 2xl:mt-48 2xl:pt-16 2xl:pb-16': !slim,
    //   })}
    // >
    //   <ParallaxBanner
    //     className="your-class"
    //     layers={[
    //       {
    //         image: '/assets/img/sprinkler-head.jpg',
    //         amount: 0.5,
    //       },
    //     ]}
    //     style={{
    //       height: '500px',
    //     }}
    //   >
    <div tw="flex flex-col h-full lg:flex-row items-center justify-center max-w-full container mx-auto py-6">
      {/* {!slim && (
          <div tw="pb-6 lg:pb-0 lg:pr-6">
            <Gardening width="12rem" height="auto" />
          </div>
        )} */}
      {children}
      <div
        tw="bg-white pb-12 mx-3 md:mx-12 rounded-2xl md:flex-1 md:max-w-lg flex flex-col items-center pt-6 relative"
        className="contact-box"
      >
        {sending && (
          <>
            <div tw="absolute h-full w-full bg-white z-40 opacity-90"></div>
            <div tw="absolute h-full w-full flex items-center justify-center z-50 opacity-90">
              <ExampleLoader />
            </div>
          </>
        )}
        {/* <div tw="text-2xl font-bold">Contacteaza-ne</div>
          <div tw="mt-2">Raspundem cat mai prompt.</div> */}
        {err && (
          <div tw="mt-3 bg-red-400 p-3 rounded w-full text-center text-xl font-bold">
            A aparut o eroare la trimitere mail-ului. Poti sa reincerci sau sa
            ne contactezi tu.
          </div>
        )}
        {!sent && (
          <>
            <div tw="flex shadow rounded px-4">
              <TypeBtn
                active={type == 'persoana'}
                onClick={(e) => {
                  e.preventDefault();
                  setType('persoana');
                }}
              >
                <div
                  className={classNames({
                    'text-transparent': type != 'persoana',
                    'text-green-500': type == 'persoana',
                  })}
                >
                  <PersonPic width={70} height={50} />
                </div>
                <div>Sunt persoana fizica</div>
              </TypeBtn>
              <TypeBtn
                tw="ml-2"
                active={type == 'companie'}
                tw=""
                onClick={(e) => {
                  e.preventDefault();
                  setType('companie');
                }}
              >
                <div>
                  <CompanyPic width={50} height={50} />
                </div>
                <div>Sunt o companie</div>
              </TypeBtn>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div tw="w-full px-10 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    placeholder={type == 'companie' ? 'nume companie' : 'nume'}
                    name="nume"
                    defaultValue={data.nume}
                    onChange={(e) => {
                      setData({ ...data, nume: e.target.value });
                    }}
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <Input
                    placeholder={
                      type == 'companie' ? 'persoana de contact' : 'prenume'
                    }
                    name="prenume"
                    defaultValue={data.prenume}
                    onChange={(e) => {
                      setData({ ...data, prenume: e.target.value });
                    }}
                    ref={register({ required: true })}
                  />
                </div>
                <div>
                  <Input
                    placeholder="numar de telefon"
                    name="telefon"
                    defaultValue={data.telefon}
                    onChange={(e) => {
                      setData({ ...data, telefon: e.target.value });
                    }}
                    ref={register({
                      required: true,
                      pattern: /^[0-9]+$/,
                      min: 10,
                    })}
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    defaultValue={data.email}
                    onChange={(e) => {
                      setData({ ...data, email: e.target.value });
                    }}
                    placeholder="e-mail (optional)"
                    ref={register({
                      pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                  />
                </div>
                <div tw="md:col-span-2">
                  <label tw="text-gray-500 text-sm">
                    <input
                      type="checkbox"
                      tw=" h-5 w-5 text-green-600"
                      className="form-checkbox"
                      name="acord"
                      ref={register({
                        required: true,
                      })}
                    />{' '}
                    <span tw="ml-1">
                      Sunt ca datele sa fie procesate pentru a fi contactat.
                    </span>
                  </label>
                </div>
                <div tw="md:col-span-2">
                  <Input
                    type="submit"
                    value="Trimite"
                    tw="inline-block bg-green-500 hover:bg-green-600 transition ease-in-out duration-500 transform p-4 text-black hover:text-white border-b-2 border-r-2 hover:border-b-4 hover:border-r-4 border-black inset-1 font-bold rounded-lg"
                  />
                </div>
              </div>
            </form>
          </>
        )}
        {sent && (
          <div tw="mt-3 bg-green-400 p-3 rounded w-full text-center text-xl font-bold">
            Am primit cererea ta. In curand te vom contacta.
          </div>
        )}
      </div>
      {!slim && (
        <div tw="hidden lg:block lg:pl-6">
          {/* <LawnMower width="12rem" /> */}
          {/* <Sprinkler width="12rem" height="auto" /> */}
        </div>
      )}
    </div>
  );
};
