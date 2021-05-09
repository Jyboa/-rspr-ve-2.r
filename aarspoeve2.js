class Counter {
    int value;
    int getValue(){
        return value;
    }
    void click(){
        value =value + 1;
    }
    void unclick(){
        value = value - 1;
    }
    void reset(){
        value = 0
    }
    void setLimit(int maximum){
        maximum = 100
    }
}
class countertester {
    static void main(String[]args){
        counter taller = new Counter();
        taller.click();
        taller.click();
        int resultat = taller.getValue();
        system.out.println(resultat);
    }
}