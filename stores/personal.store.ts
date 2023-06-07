import {
    IAddressInfo,
    IBankingInfo,
    IEducation,
    IJob,
    ILisence,
    IMarriage,
    IParent,
    IPersonalInfo,
    ISocailSecurityOfficeInfo,
    ITax,
    address,
} from './interface/personal_information.interface'

import { defineStore } from 'pinia'

interface State {
    job_position: any
    personal_info: IPersonalInfo
    address: IAddressInfo
    banking: IBankingInfo
    license: ILisence
    ss: ISocailSecurityOfficeInfo
    education: IEducation
    job: IJob
    parent: IParent
    marriage: IMarriage
    tax: ITax
}

export const usePersonalStore = defineStore('personal', {
    state: (): State => {
        return {
            job_position: {},
            personal_info: {
                title_name_th: '',
                first_name_th: 'TEST',
                last_name_th: '',
                nickname_th: '',
                title_name_en: '',
                first_name_en: '',
                last_name_en: '',
                email_address: '',
                birth_date: '',
                province_when: '',
                age_year: 0,
                age_month: 0,
                id_card_number: 0,
                id_card_amphur: '',
                id_card_province: '',
                id_card_issue_date: '',
                id_card_expire_date: '',
                height: 0,
                weight: 0,
                blood_type: '',
                race: '',
                nationality: '',
                religion: '',
                military_status: '',
            },
            address: {
                reg_address: {
                    address_no: '',
                    address_moo: '',
                    address_village: '',
                    address_soi: '',
                    address_road: '',
                    address_district: '',
                    address_city: '',
                    address_province: '',
                    address_postcode: '',
                },
                cur_address: {
                    address_no: '',
                    address_moo: '',
                    address_village: '',
                    address_soi: '',
                    address_road: '',
                    address_district: '',
                    address_city: '',
                    address_province: '',
                    address_postcode: '',
                },
                emer_address: {
                    address_no: '',
                    address_moo: '',
                    address_village: '',
                    address_soi: '',
                    address_road: '',
                    address_district: '',
                    address_city: '',
                    address_province: '',
                    address_postcode: '',
                },
                cur_mobile: '',
            },
            license: {
                license_begin_date: '',
                license_expire_date: '',
                license_number: '',
            },
            ss: {
                ss_have: false,
                ss_card_expire_date: '',
                ss_card_hospital: '',
                ss_card_number: null,
                ss_card_issue_date: '',
                ss_card_province: '',
                ss_same_number: false,
            },
            banking: {
                bank_account_name: '',
                bank_account_number: '',
            },
            education: {
                education_select: '1',
                education_list: [
                    {
                        id: 0,
                        education_level: '',
                        degree: '',
                        major: '',
                        school: '',
                        gpa: '',
                        start_date: '',
                        graduate_date: '',
                    },
                ],
            },
            parent: {
                father: {
                    title_special: null,
                    title_name: null,
                    first_name: '',
                    last_name: '',
                    career: '',
                    id_card_number: '',
                    living: true,
                    race: '',
                    nationality: '',
                    religion: '',
                },
                mother: {
                    title_special: null,
                    title_name: null,
                    first_name: '',
                    last_name: '',
                    career: '',
                    id_card_number: '',
                    living: true,
                    race: '',
                    nationality: '',
                    religion: '',
                },
                mf_date_of_marriage: '',
                mf_no_marriage: '',
            },
            job: {
                had_job: 'N',
                had_job_list: [
                    {
                        company_name: '',
                        end_date: '',
                        position_name: '',
                        reason: '',
                        salary: '',
                        still_doing: false,
                        start_date: '',
                    },
                ],

                had_job_mahidol: 'N',
                had_job_mahidol_detail: {
                    department: '',
                    end_date: '',
                    got_compensation: false,
                    position_name: '',
                    reason: '',
                    salary: '',
                    sap_type: '',
                    start_date: '',
                    still_doing: false,
                },
                job_status: '1',
                current_job: {
                    company_name: '',
                    company_province: '',
                    duration_m: '',
                    duration_y: '',
                    job_type: '',
                    position_name: '',
                },
                current_education: {
                    education_level: '',
                    graduate_date: '',
                    major: '',
                    school: '',
                },
                current_unemployee: {
                    duration_y: 0,
                    duration_m: 0,
                    reason: '',
                },
            },
            marriage: {
                status: '',
                num_of_chlid: '0',
                children_list: [],
                ref_person: {
                    address_detail: {
                        address_city: '',
                        address_district: '',
                        address_moo: '',
                        address_no: '',
                        address_postcode: '',
                        address_province: '',
                        address_road: '',
                        address_soi: '',
                        address_village: '',
                        id: 0,
                    },
                    address_option: '',
                    frist_name: '',
                    last_name: '',
                    phone_number: '',
                    relationship: '',
                    title: '',
                    id: 0,
                },
            },
            tax: {
                chlid_endschool: 0,
                chlid_nonschool: 0,
                chlid_school: 0,
                num_of_child: 0,
                donate: 'N',
                donate_amount: 0,
                fund: 'N',
                fund_amount: 0,
                insurance: 'N',
                insurance_amount: 0,
                loan: 'N',
                loan_amount: 0,
                marriage_income: '1',
                marriage_insurance: 'N',
                marriage_insurance_amount: 0,
                parent_support: 'N',
                parent_support_amount: 0,
            },
        }
    },
    getters: {
        calculateAge: ({ personal_info }) => {
            return () => {
                let today = new Date()
                let birthDate = new Date(personal_info.birth_date)

                let years = today.getFullYear() - birthDate.getFullYear()
                let months = today.getMonth() - birthDate.getMonth()

                if (months < 0) {
                    years--
                    months += 12
                }

                return {
                    years: years,
                    months: months,
                }
            }
        },
    },
    actions: {
        removeJobList(index: number) {
            index -= 1
            this.job.had_job_list.splice(index, 1)
        },
        removeEducationList(index: number) {
            index -= 1
            this.education.education_list.splice(index, 1)
        },
        useRegAddressOnCurAddress() {
            this.address.cur_address = deepCopy(this.address.reg_address)
        },
        useRegAddressOnEmerAddress() {
            this.address.emer_address = deepCopy(this.address.reg_address)
        },
        useCurAddressOnEmerAddress() {
            this.address.emer_address = deepCopy(this.address.cur_address)
        },
    },
})
