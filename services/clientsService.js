/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';

class ClientsService {

    getToken = async () => AsyncStorage.getItem('TOKEN')
    async getclientes() {
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'GET',
            timeout: 5000,
            params: {
                opcao: '0',
                pag: '0',
                numRows: '25',
                table_usage: '1',
                _token: token
            },
            headers: {
                Accept: 'application/json',
            },
        });
    }

    async getcliente(id) {
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'GET',
            timeout: 5000,
            params: {
                opcao: '1',
                idCliente: id,
                _token: token
            },
            headers: {
                Accept: 'application/json',
            },
        });
    }


    async editcliente(dadosCli) {
        console.log(dadosCli.Cidade);
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'PUT',
            timeout: 5000,
            data: qs.stringify({
                opcao: '3',
                _token: token,
                idCliente: dadosCli.ID_Cliente,
                nome_cliente: dadosCli.Nome,
                nif_cliente: dadosCli.Nif,
                pais_cliente: dadosCli.Pais,
                endereco_cliente: dadosCli.Endereco,
                codigopostal_cliente: dadosCli.CodigoPostal,
                regiao_cliente: dadosCli.Regiao,
                cidade_cliente: dadosCli.Cidade,
                email_cliente: dadosCli.Email,
                website_cliente: dadosCli.Website,
                tlm_cliente: dadosCli.Telemovel,
                tlf_cliente: dadosCli.Telefone,
                fax_cliente: dadosCli.Fax,
                preferencial_nome_cliente: dadosCli.NomePref,
                preferencial_email_cliente: dadosCli.EmailPref,
                preferencial_tlm_cliente: dadosCli.TelemovelPref,
                preferencial_tlf_cliente: dadosCli.TelefonePref,
                pagamento_cliente: dadosCli.Pagametno,
                vencimento_cliente: dadosCli.Vencimento,
                desconto_cliente: dadosCli.Desconto,
                flagContaGeral: dadosCli.Flag,
                codigo_interno_cliente: dadosCli.CodigoInterno,
            }),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        });
    }


    async insertCliente(nome_cliente, nif_cliente) {
        console.log("nome" + nome_cliente, "nif" + nif_cliente)
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'POST',
            timeout: 5000,
            data: qs.stringify({
                opcao: '2',
                _token: token,
                nome_cliente: nome_cliente,
                nif_cliente: nif_cliente,
            }),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        })
    }



    async deletecliente(id) {
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'DELETE',
            timeout: 5000,
            data: qs.stringify({
                opcao: '4',
                _token: token,
                idCliente: id
            }),
            headers: { 'content-type': 'application/x-www-form-urlencoded' },
        });
    }


    async addcliente(dadosCli) {
        console.log(dadosCli);
        var token = await this.getToken();
        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/clientes',
            method: 'POST',
            timeout: 5000,
            data : {
                opcao: '2',
                _token: token,
                nome_cliente: dadosCli.Nome ,
                nif_cliente: dadosCli.Nif,
                pais_cliente: dadosCli.Pais,
                endereco_cliente: dadosCli.Endereco,
                codigopostal_cliente: dadosCli.CodigoPostal,
                regiao_cliente: dadosCli.Regiao,
                cidade_cliente: dadosCli.Cidade,
                email_cliente: dadosCli.Email,
                website_cliente: dadosCli.Website,
                tlm_cliente: dadosCli.Telemovel,
                tlf_cliente: dadosCli.Telefone,
                fax_cliente: dadosCli.Fax,
                vencimento_cliente: dadosCli.Vencimento,
                desconto_cliente: dadosCli.Desconto,
        },
        headers: {
            Accept: 'application/json',
        }
        });
    }


}

const clientsService = new ClientsService();
export default clientsService;


