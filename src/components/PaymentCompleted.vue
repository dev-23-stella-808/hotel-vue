<template>
    <div>
        <p>
            Congratulations , <b>{{ name | capitalize | prefix }}</b>
            Your payment is successful.
        </p>
        <p>
            <i class="fas fa-umbrella-beach text-primary"></i>
            Enjoy the vacation.
        </p>
    </div>
</template>

<script>
export default {
    name:"PaymentCompleted",
    props:{
        name:{
            type:String,
            default:"Visitor"
        }
    }
}
</script>

<style>
</style>