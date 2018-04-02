import urllib.request, json

def dataToStr(data,tab):
    if type(data) == dict:
        result = "{\n"
        for key,value in data.items():
            result += '{}"{}": {},\n'.format(tab,key,dataToStr(value,tab+'\t'))
        return result+'{}}}'.format(tab)
    elif type(data) == list:
        result = "["
        for item in data:
            result += '\n{}{},'.format(tab,dataToStr(item,tab+'\t'))
        return result+'{}]'.format(tab)
            #~ print('{}"{}": ['.format(tab,key))
            #~ for item in value:
                #~ print("{}\t{}".format(tab,item))
            #~ print('{}]'.format(tab))
    else:
        return data  

def getAccount(addr):
    url="http://bigalice2.nem.ninja:7890/account/get?address={}".format(addr)
    response = urllib.request.urlopen(url)
    return json.loads(response.read())
    return data["account"]["balance"]
    
addrs = [
    "TC6SDTFIDJMHR7YHGNJS4ZKA5Y2A36WQDSMDCDVJ",
    "TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE",
    "TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L",
    "TAWC5PATBWWDNWEPBRCOY5CL4MLAHTRNGQWSGZ33",
    "TCZKZW66FNZR4C4CZHAYTYMPHBBRH2US3ULDCB3U",
]
for addr in addrs:
    data = getAccount(addr)
    print( addr, data["account"]["balance"]/1000000, "\t\t", data["account"]["publicKey"] )
    print('\tcosignatoryOf:')
    for item in data["meta"]["cosignatoryOf"]:
        itemAccount = getAccount(item["address"])
        print( '\t',item["address"], itemAccount["account"]["balance"]/1000000, "\t\t", itemAccount["account"]["publicKey"] )
#~ print(dataToStr(getAccount("TA7U5VQWBU42QYZ3L4ZDXXS6UGJ32KQ57LL4RNIX"),''))

