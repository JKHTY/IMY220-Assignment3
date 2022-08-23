
function EventHandler(events)
{
    var array = events;

    this.getEventsBetweenDates = function(start, end)
    {
        var arr = array.filter((array)=> array.dateStart >= start && array.dateEnd <= end);
        return arr;
    }

    this.getByMonth = function(month)
    {
        var arr = array.filter((array) => array.dateStart[5] + array.dateStart[6] == month);
        return arr;
    }

    this.getUniqueDateAndSort = function()
    {
        array.sort((a, b) => {
            var fa = a.dateStart;
            var fb = b.dateStart;
            if(fa < fb)
            {
                return -1;
            }
            if(fa > fb)
            {
                return 1;
            }
            return 0;
        });
        var dup = array.reduce((a, curr) => {
            var temp = array.filter((a)=> a.dateStart == curr.dateStart && a.dateEnd == curr.dateEnd);
            if(temp.length > 1)
            {
                return temp;
            } 
        },[]);
        
        dup.shift();
        var arr = array.reduce((a, curr) => {
            if(!dup.includes(curr))
            {
                a.push(curr);
            }
            return a;
        }, [])

        return arr;
    }

    this.getSummary = function(param) {
        var arr = [];
        if(typeof param == "undefined")
        {
            arr = array.reduce((a, curr) => {
                var temp;
                if(curr.dateEnd == curr.dateStart)
                {
                    temp = "On " + curr.dateStart + ": " + curr.name + " (" + curr.description + ")";
                    a.push(temp);
                }
                else
                {
                    temp = "From " + curr.dateStart + " to " + curr.dateEnd + ": " + curr.name + " (" + curr.description + ")"
                    a.push(temp);
                }
                return a;
            },[]);
            return arr;
        }

        if(param.constructor === Array)
        {
            arr = param.reduce((a, curr) => {
                var temp;
                if(curr.dateEnd == curr.dateStart)
                {
                    temp = "On " + curr.dateStart + ": " + curr.name + " (" + curr.description + ")";
                    a.push(temp);
                }
                else
                {
                    temp = "From " + curr.dateStart + " to " + curr.dateEnd + ": " + curr.name + " (" + curr.description + ")"
                    a.push(temp);
                }
                return a;
            },[]);
            return arr;
        }

        if(param.constructor === Object)
        {
            if(param.dateEnd == param.dateStart)
            {
                arr.push("On " + param.dateStart + ": " + param.name + " (" + param.description + ")");
            }
            else
            {
                arr.push("From " + param.dateStart + " to " + param.dateEnd + ": " + param.name + " (" + param.description + ")");
            }
            return arr;
        }
    }
    
}
var array = new Array;
var handler = new EventHandler(events);
//EventHandler.prototype.getSummary(this);
// var start;
// var end;
// var betweenDate = handler.getEventsBetweenDates(start, end);
// var getMonth = handler.getByMonth(05);
// var uniqueAndSort = handler.getUniqueDateAndSort();
// var summ = handler.getSummary();
// var a = [
// 	{name: "University expo", description: "Expo to showcase University degrees", dateStart: "2022/02/01", dateEnd: "2022/02/14"},
//     {name: "Market", description: "Farmer's market day long event", dateStart: "2022/06/12", dateEnd: "2022/06/12"}];
// var summary = handler.getSummary(a);
// var sum = handler.getSummary({name: 'Pizza party', description: "Pizza party at work",dateStart: '2022/07/10', dateEnd: '2022/07/10'});

Array.prototype.getSummary = function(){
    var ans = handler.getSummary(this);
    return ans;
};

Array.prototype.getByMonth = function(month){
    var ans = handler.getByMonth(month);
    return ans;
};

Array.prototype.getEventsBetweenDates = function(start, end){
    var ans = handler.getEventsBetweenDates(start, end);
    return ans;
};

Array.prototype.getUniqueDateAndSort = function(){
    var ans = handler.getUniqueDateAndSort();
    return ans;
};


//eh.getByMonth().concat(eh.getSummary());
//var s = handler.getByMonth(02).getSummary();
//var p = eh.getSummary(s);

//a.getSummary();
//console.log(events);

