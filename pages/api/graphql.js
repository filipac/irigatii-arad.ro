import { ApolloServer, gql } from 'apollo-server-micro';
const nodemailer = require('nodemailer');

const typeDefs = gql`
  type Query {
    users: [User!]!
  }
  type Mutation {
    sendContactEmail(
      tip: String!
      nume: String!
      prenume: String!
      telefon: String!
      email: String
    ): Boolean!
  }
  type User {
    name: String
  }
`;

const smtp_host = 'hosting2171794.online.pro';
const smtp_port = 465;

const resolvers = {
  Query: {
    users(parent, args, context) {
      return [{ name: 'Nextjs' }];
    },
  },
  Mutation: {
    async sendContactEmail(parent, args, context) {
      let transporter = nodemailer.createTransport({
        host: smtp_host,
        port: smtp_port,
        secure: true, // true for 465, false for other ports
        auth: {
          user: 'no-reply@arad-gardens.ro.ro', // generated ethereal user
          pass: process.env.SMTP_PASS, // generated ethereal password
        },
      });
      let html = `
        Salut, <br>
        Ai o cerere noua de contact de pe <strong>arad-gardens.ro.ro</strong>: <br> <br>
        <strong>Tip Contact:</strong> ${
          args.tip == 'companie' ? 'Companie' : 'Persoana'
        } <br>
        <strong>${
          args.tip == 'companie' ? 'Nume Companie' : 'Nume'
        }:</strong> ${args.nume} <br>
        <strong>${
          args.tip == 'companie' ? 'Persoana de contact' : 'Prenume'
        }:</strong> ${args.prenume} <br>
        <strong>Telefon:</strong> ${args.telefon} <br>
        ${args.email ? '<strong>Email:</strong> ' + args.email + ' <br>' : ''}
        <br>
        Cam atat.
      `;
      let info = await transporter.sendMail({
        from: '"Arad Gardens" <no-reply@arad-gardens.ro>', // sender address
        to: 'filip@pacurar.net',
        subject: 'Cerere Contact Arad-Gardens.ro',
        html,
      });
      return true;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
