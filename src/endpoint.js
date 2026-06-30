

export const BASE_URL = "http://192.168.18.158:8000/api"

// export const BASE_URL = "https://logisticsbackend.moshlaycreatives.com/api"


export const endpoints = {

    // Website Api
    CustomerApi: `${BASE_URL}/become-customer`,
    QuoteRequestApi: `${BASE_URL}/quotes`,
    WebArticleApi: `${BASE_URL}/articles`,
    WebNewsApi: `${BASE_URL}/news`,



    //Admin Dashboard api
    LoginApi: `${BASE_URL}/admin/login`,
    ArticleApi: `${BASE_URL}/admin/articles`,
    NewsApi: `${BASE_URL}/admin/news`,
    CategoryApi: `${BASE_URL}/admin/categories`,
    AdminQuoteApi: `${BASE_URL}/admin/quotes`



}