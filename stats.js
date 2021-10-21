const express = require('express');
const ExpressError = require('./error');
const {verifyArray, findMean, findMedian, findMode} = require('./helpers') 

const app = express();

app.use(express.json());

app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    nums = req.query.nums.split(',');
    verified_nums = verifyArray(nums);

    if (verified_nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

    let result = {
        operation: "mean",
        value: findMean(verified_nums)
    };

    return res.send(result);
    
})

app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    nums = req.query.nums.split(',');
    verified_nums = verifyArray(nums);

    if (verified_nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

    let result = {
        operation: "median",
        value: findMedian(verified_nums)
    };

    return res.send(result);
})


app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
    }
    nums = req.query.nums.split(',');
    verified_nums = verifyArray(nums);

    if (verified_nums instanceof Error) {
        throw new ExpressError(nums.message);
      }

    let result = {
        operation: "mode",
        value: findMode(verified_nums)
    };

    return res.send(result);
})

app.use((error, req, res, next) => {
    const err = new ExpressError('Not Found', 404);
    return next(err);
})

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.msg
    });
  });

app.listen(3000, ()=> {
    console.log('App on port 3000!');
})

