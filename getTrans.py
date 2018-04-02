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

def getIncoming(addr):
    url="http://bigalice2.nem.ninja:7890/account/transfers/incoming?address={}".format(addr)
    response = urllib.request.urlopen(url)
    return json.loads(response.read())
    
def getUnconfirmedTransactions(addr):
    url="http://bigalice2.nem.ninja:7890/account/unconfirmedTransactions?address={}".format(addr)
    response = urllib.request.urlopen(url)
    return json.loads(response.read())
    
#~ data = getIncoming("TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L")['data']
#~ fdata = filter(lambda item:item['transaction']['type']==4100,data)
#~ print(len(list(fdata)))
#~ print(dataToStr(getAccount("TCKHSKMSEZR7BXUW6MH34QBQ7F3KZFMHMOJ7UG6L")['data'],''))
#~ data = getUnconfirmedTransactions('TA7U5VQWBU42QYZ3L4ZDXXS6UGJ32KQ57LL4RNIX')
data = getUnconfirmedTransactions('TBTPDJDR3ZMHMMIKUXPXJTQICBX3IFRRSV6PVFBE')
print(dataToStr(data,''))