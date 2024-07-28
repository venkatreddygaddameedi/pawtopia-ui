import { environment } from '../environments/environment'
const apiUrl = environment.apiUrl

export const ApiUrls = {
  user: {
    authenticate: apiUrl + 'user/authenticate',
    verify: apiUrl + 'user/verify',
    getAllOTPs: apiUrl + 'user/getAllOTPs',
  },
  division: {
    getAll: apiUrl + 'MasterDivision/getall',
    getActive: apiUrl + 'MasterDivision/getActive',
    create: apiUrl + 'MasterDivision/create',
    update: apiUrl + 'MasterDivision/update',
  },
  meals: {
    getAll: apiUrl + 'MasterMeal/getall',
    getActive: apiUrl + 'MasterMeal/getActive',
    create: apiUrl + 'MasterMeal/create',
    update: apiUrl + 'MasterMeal/update',
  },
  transport: {
    getAll: apiUrl + 'MasterTransport/getall',
    getActive: apiUrl + 'MasterTransport/getActive',
    create: apiUrl + 'MasterTransport/create',
    update: apiUrl + 'MasterTransport/update',
  },
  academicYear: {
    getAll: apiUrl + 'MasterAcademicYear/getall',
    getActive: apiUrl + 'MasterAcademicYear/getActive',
    create: apiUrl + 'MasterAcademicYear/create',
    update: apiUrl + 'MasterAcademicYear/update',
  },
  divisionTutionFee: {
    getAll: apiUrl + 'DivisionTutionFee/getall',
    getById: apiUrl + 'DivisionTutionFee/getById/',
    create: apiUrl + 'DivisionTutionFee/create',
    update: apiUrl + 'DivisionTutionFee/update',
  },
  divisionFoodFee: {
    getAll: apiUrl + 'DivisionFoodFee/getall',
    getById: apiUrl + 'DivisionFoodFee/getById/',
    create: apiUrl + 'DivisionFoodFee/create',
    update: apiUrl + 'DivisionFoodFee/update',
  },
  divisionAdditionalFee: {
    getAll: apiUrl + 'DivisionAdditionalFee/getall',
    getById: apiUrl + 'DivisionAdditionalFee/getById/',
    create: apiUrl + 'DivisionAdditionalFee/create',
    update: apiUrl + 'DivisionAdditionalFee/update',
  },
  admissionDetail: {
    getAll: apiUrl + 'AdmissionDetail/getall',
    getById: apiUrl + 'AdmissionDetail/getById/',
    create: apiUrl + 'AdmissionDetail/create',
    update: apiUrl + 'AdmissionDetail/update',
    generateFeeCaclPDF: apiUrl + 'AdmissionDetail/generateFeeCaclPDF',
  }
}
