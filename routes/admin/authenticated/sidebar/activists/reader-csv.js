/**
 * community_id,activist_id,email,name,phone,total_form_entries,total_donations,total_pressures,total_actions,last_donation_status,last_donation_amount,last_donation_is_subscription,address_street,street_number,neighborhood,complementary,city,state
 * 8,26105,jnewman@terra.com.br,Jose Newman,,2,0,5,4,,,,,,,,,
 * 8,106139,gloria.moog@infolink.com.br,Gloria Moog,,2,0,4,4,,,,,,,,,
 * 8,110638,silviasobreira2009@gmail.com,Silvia
 * Sobreira,21988448754,2,0,4,4,,,,,,,,,
 */

export default (text, delimiter=',', linebreak=/\r\n|\n/) => {
  // Split header and body of text
  const header = text.split(linebreak)[0].split(delimiter)
  const rows = text.split(linebreak).slice(1)

  return rows.map(row => {
    const obj = {}
    row.split(delimiter).forEach((value, i) => {
      obj[header[i]] = value
    })
    return obj
  })
}
