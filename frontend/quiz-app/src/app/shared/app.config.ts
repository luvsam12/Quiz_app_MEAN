export class AppConfig {
  public static BASE_URL = 'http://localhost:3000';
  public static QUESTIONS = AppConfig.BASE_URL + '/questions'
  public static SIGN_UP = AppConfig.BASE_URL + '/user/register';
  public static LOGIN =    AppConfig.BASE_URL + '/user/login';
  public static SUBMIT = AppConfig.BASE_URL + '/result';
  public static RESPONSE = AppConfig.BASE_URL + '/result/data';
  public static MESSAGE = AppConfig.BASE_URL + '/message';
}
