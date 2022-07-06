/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import qs from 'qs';


class CategoriasArtigosService {
    getToken = async () => AsyncStorage.getItem('TOKEN');


    async getCategorias() {
        var token = await this.getToken();

        return axios({
            url: 'https://demo.gesfaturacao.pt/gesfaturacao/server/webservices/api/tabelas/categorias_artigos',
            method: 'GET',
            timeout: 5000,
            params: {
                opcao: '0',
                pag: '0',
                numRows: '25',
                _token: token,
            },
            headers: {
                Accept: 'application/json',
            },
        });
    }


}

const categoriasArtigosService = new CategoriasArtigosService();
export default categoriasArtigosService;