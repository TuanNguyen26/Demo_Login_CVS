import React, { useState } from 'react'
import { Menu } from 'antd';


const getConfidence = confidence => {
    return (confidence * 100).toFixed(2) + '%'
}

export default function Result({ result }) {

    const { data, errorCode, errorMessage } = result || {}
    const { info, type } = data || {}
    const [current, setCurrent] = useState('1')

    return (
        <>
            {data ? (
                <div className='result-wrapper' style={{ padding: current === '2' && 0 }}>
                    <div className='menu'>
                        <Menu mode="horizontal" onClick={(e) => setCurrent(e.key)} selectedKeys={[current]}>
                            <Menu.Item key="1" >
                                Thông tin
                            </Menu.Item>
                            <Menu.Item key="2">
                                Hình ảnh
                            </Menu.Item>
                        </Menu>
                    </div>
                    {current === '1' ?
                        <>
                            <GiayKhaiSinh data={info} />
                        </> :
                        <img alt='img' src={`data:image/png;base64,${info.image}`} width='100%' />
                    }
                </div>
            ) :
                <div className='error'>
                    Không tìm thấy nội dung. Vui lòng thử lại!
                </div>}
        </>
    )
}

function Field({ name, value, confidence, en }) {
    return (
        <div className='field'>
            <div className='field-name'>{name}:</div>
            <div className='field-value'>{value}
                {confidence ? <>
                    <span className='confidence-label'> - {en ? 'Confidence: ' : 'Độ tin cậy: '}
                    </span>
                    {getConfidence(confidence)}
                </> : null}
            </div>
        </div>

    )
}

function GiayKhaiSinh({ data }) {
    const { name, name_confidence, dob, dob_confidence, number, number_confidence, number_book, number_book_confidence, gender, gender_confidence,
        father_name, father_name_confidence, mother_name, mother_name_confidence, father_dob, father_dob_confidence, mother_dob, mother_dob_confidence,
        regis_date, regis_date_confidence, id, id_confidence, regis_place, regis_place_confidence, regis_place_town_code, regis_place_town,
        regis_place_district_code, regis_place_district, regis_place_ward_code, regis_place_ward
    } = data || {}

    return (
        <>
            <Field name='Họ tên' value={name} confidence={name_confidence} />
            <Field name='Ngày sinh' value={dob} confidence={dob_confidence} />
            <Field name='Số' value={number} confidence={number_confidence} />
            <Field name='Số quyển' value={number_book} confidence={number_book_confidence} />
            <Field name='Giới tính' value={gender} confidence={gender_confidence} />
            <Field name='Tên bố' value={father_name} confidence={father_name_confidence} />
            <Field name='Tên mẹ' value={mother_name} confidence={mother_name_confidence} />
            <Field name='Ngày sinh bố' value={father_dob} confidence={father_dob_confidence} />
            <Field name='Ngày sinh mẹ' value={mother_dob} confidence={mother_dob_confidence} />
            <Field name='Ngày đăng ký' value={regis_date} confidence={regis_date_confidence} />
            <Field name='Số định danh' value={id} confidence={id_confidence} />
            <div className='field'>
                <div className='field-name'>Nơi đăng ký:</div>
                <div className='field-value'>
                    {regis_place && <>{regis_place} <span className='confidence-label'>- Độ tin cậy: </span>{getConfidence(regis_place_confidence)}<br /></>}
                    <span className='label' >Tỉnh/TP:</span> {regis_place_town_code} {regis_place_town && <>- {regis_place_town}</>}<br />
                    <span className='label' >Quận/Huyện:</span> {regis_place_district_code} {regis_place_district && <>- {regis_place_district}</>}<br />
                    <span className='label' >Phường/Xã:</span> {regis_place_ward_code} {regis_place_ward && <>- {regis_place_ward}</>}
                </div>
            </div>
        </>
    )
}
